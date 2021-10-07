"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield blog.findAll();
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield blog.create({
            content: req.body.content
        });
        res.send(`Created the new blog`);
    }
    catch (error) {
        res.send(error);
    }
}));
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield blog.update({
            content: req.body.content
        }, {
            where: {
                id: req.params.id
            }
        });
        res.send(`Successfully updated the blog with id ${req.params.id}`);
    }
    catch (error) {
        res.send(error);
    }
}));
router.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield blog.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send(`Successfully deleted the blog with id ${req.params.id}`);
    }
    catch (error) {
        res.send(error);
    }
}));
module.exports = router;
