"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.head = null;
        for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
            var number = numbers_1[_a];
            _this.add(number);
        }
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var currentIndex = 0;
        var node = this.head;
        while (node) {
            if (currentIndex === index)
                return node;
            currentIndex++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.add = function (data) {
        var node = new Node_1.Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        // Swappinng values, not nodes
        var leftHand = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            console.log('List is empty');
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
