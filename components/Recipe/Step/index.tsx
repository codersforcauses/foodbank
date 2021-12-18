import React from "react";
import { ColorScheme, RecipeStep } from "lib/types";
import Image from "next/image";
import styles from "./Step.module.css";



interface Props {
  step: RecipeStep;
  colorScheme: ColorScheme;
  key: number;
}

const Step: React.FC<Props> = ({ step, colorScheme, key }) => (
  <div className="flex flex-row items-center my-5 w-screen space-x-8" key={key}>
    <h1 className={"w-12 text-4xl font-serif " + colorScheme.header}>
      {step.number}
    </h1>
    <div className={styles["card-image-container"]}>
      <Image
        className={styles.image + " rounded-2xl"}
        src={step.image}
        alt="Step"
        layout='fill'
      />
    </div>
    <p className={"w-1/2 " + colorScheme.text}>{step.description}</p>
  </div>
);

export default Step;
