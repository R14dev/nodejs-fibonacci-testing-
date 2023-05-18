import { deepStrictEqual } from "assert";
import sinon from "sinon";
import Fibonacci from "./fibonacci.js";

(async () => {
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    for await (const i of fibonacci.execute(3)) {
    }
    const count = 4;
    deepStrictEqual(spy.callCount, count);
  }
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    const [...result] = fibonacci.execute(5);

    const args = spy.getCall(2).args;
    const expectedResult = [0,1,1, 2, 3];
    const expectedArgsParams = Object.values({
      input: 3,
      current: 1,
      next: 2,
  });
    deepStrictEqual(args, expectedArgsParams);
    deepStrictEqual(result, expectedResult);
  }
})();
