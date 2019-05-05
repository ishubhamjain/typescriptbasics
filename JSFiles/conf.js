"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // To run script without cucumber use below
    specs: ['realproject.js'],
    capabilities: {
        'browserName': 'firefox',
        'marionette': true
    },
    SELENIUM_PROMISE_MANAGER: false,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFVyxRQUFBLE1BQU0sR0FBVztJQUN4QixhQUFhLEVBQUMsSUFBSTtJQUNsQixlQUFlLEVBQUUsOEJBQThCO0lBQy9DLDJDQUEyQztJQUMzQyxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6QixZQUFZLEVBQUU7UUFDVixhQUFhLEVBQUUsU0FBUztRQUN4QixZQUFZLEVBQUUsSUFBSTtLQUNyQjtJQUNELHdCQUF3QixFQUFFLEtBQUs7Q0FHbEMsQ0FBQyJ9