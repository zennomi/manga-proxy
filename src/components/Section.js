import React, { PureComponent } from "react";
import { classNames } from "../utils/strings";

export default class Section extends PureComponent {
  render() {
    return (
      <section className="w-full flex-grow pt-1 sm:pt-2">
        <div className="w-full flex-grow">
          <h1
            className={classNames(
              this.props.textSize ? this.props.textSize : "text-2xl sm:text-3xl",
              "text-black dark:text-white font-semibold leading-loose"
            )}
          >
            {this.props.text}
          </h1>
          <h2
            className={classNames(
              this.props.subTextSize ? this.props.subTextSize : "text-sm sm:text-md",
              "text-gray-600 dark:text-gray-400 font-medium"
            )}
          >
            {this.props.subText}
          </h2>
        </div>
      </section>
    );
  }
}
