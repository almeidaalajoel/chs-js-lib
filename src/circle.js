import Thing from './thing.js';
import Color from './color.js';
import { getDistance } from './graphics-utils.js';

/** @module Circle */

/**
 * A circle defined by its radius.
 * @extends Thing
 */
class Circle extends Thing {
    /**
     * Constructs a new circle.
     * @constructor
     * @example
     * const c = new Circle(20);
     *
     * @param {number} radius
     */
    constructor(radius) {
        super();
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `new Circle(radius)`.');
        }
        if (typeof radius !== 'number' || !isFinite(radius)) {
            throw new TypeError(
                'You must pass a finite number to `new Circle(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }

        this.radius = Math.max(0, radius);
        this.color = Color.black;
        this.lineWidth = 3;
    }

    /**
     * Draws the circle in the canvas.
     *
     * @private
     * @param {CodeHSGraphics} graphics - Instance of the Graphics module.
     */
    draw(graphics) {
        super.draw(graphics, context => {
            context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            context.closePath();
        });
    }

    /**
     * Gets the radius of the circle
     *
     * @example
     * const c = new Circle(20);
     * c.getRadius === 20;
     * @return {number} Radius of the circle.
     */
    getRadius() {
        return this.radius;
    }

    /**
     * Gets the height (diamter) of the circle.
     *
     * @example
     * const c = new Circle(20);
     * c.getHeight === 40;
     * @return {number} Height (diameter) of the circle.
     */
    getHeight() {
        return this.radius * 2;
    }

    /**
     * Gets the width (diamter) of the circle.
     *
     * @example
     * const c = new Circle(20);
     * c.getHeight === 40;
     * @return {number} Width (diameter) of the circle.
     */
    getWidth() {
        return this.radius * 2;
    }

    /**
     * Sets the radius of the circle.
     *
     * @example
     * const c = new Circle(20);
     * c.setRadius(1);
     * c.getRadius === 1;
     * @param {number} radius - Desired resulting radius of the circle.
     */
    setRadius(radius) {
        if (arguments.length !== 1) {
            throw new Error('You should pass exactly 1 argument to `setRadius(radius)`.');
        }
        if (typeof radius !== 'number' || !isFinite(radius)) {
            throw new Error(
                'You must pass a finite number to `setRadius(radius)`. Did you forget the parentheses in `getWidth()` or `getHeight()`? Or did you perform a calculation on a variable that is not a number?'
            );
        }

        this.radius = Math.max(0, radius);
    }

    /**
     * Checks if the passed point is contained in the circle.
     *
     * @example
     * const c = new Circle(20);
     * c.setPosition(0, 0);
     * c.containsPoint(5, 5) === true;
     * @param {number} x - The x coordinate of the point being tested.
     * @param {number} y - The y coordinate of the point being tested.
     * @return {boolean} Whether the passed point is contained in the circle.
     */
    containsPoint(x, y) {
        var circleEdge = this.radius;
        if (this.hasBorder) {
            circleEdge += this.lineWidth;
        }
        var dist = getDistance(this.x, this.y, x, y);
        return dist < circleEdge;
    }
}

export default Circle;
