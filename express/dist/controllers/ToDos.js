"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const Todo_1 = require("../models/Todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new Todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.json({
        message: 'Created the todo.',
        createdTodo: newTodo
    });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Coould not find todo!');
    }
    TODOS[todoIndex] = new Todo_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'updated!', updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
