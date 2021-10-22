import aws from "aws-sdk";

const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

export const getDetails = async(prefix: string, schema: any) => {
  const result: any = [];
  const s3 = new aws.S3({
    accessKeyId,
    secretAccessKey,
  });

  const params: any = {
    Bucket: bucketName,
    Delimiter: '/',
    Prefix: prefix,
  };

  const data: any = await s3.listObjectsV2(params).promise();
  for (let index = 1; index < data['CommonPrefixes'].length; index++) {
    result.push(data['CommonPrefixes'][index]['Prefix'].split("/")[1]);  
  };

  const duplicateEntries = [];
  let sorted_arr = result.slice().sort();
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      duplicateEntries.push(sorted_arr[i]);
    }
  };

  const missingFromS3 = [];
  for (let i = 0; i < schema.length; i++) {
    const odd = schema[i];
    const includes = result.some((element: string) => {
      return element.toLowerCase() === odd.toLowerCase()
    });
    if (includes) {
      continue;
    }
    missingFromS3.push(odd);
  }

  const missingFromSchema = [];
  for (let i = 0; i < result.length; i++) {
    const odd = result[i];
    const includes = schema.some((element: string) => {
      return element.toLowerCase() === odd.toLowerCase()
    });
    if (includes) {
      continue;
    }
    missingFromSchema.push(odd);
  };

  return { duplicateEntries: duplicateEntries, itemsNotInBucket: missingFromS3, itemsNotInSchema: missingFromSchema };
};