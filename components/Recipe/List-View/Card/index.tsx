/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";
import { Character } from "@lib/types";
import explosion from "public/images/Extra/explosion.png";
import Image from "next/image";

export interface CardProps {
  /**
   * Has this recipe been unlocked?
   */
  unlocked?: boolean;
  /**
   * Recipe title
   */
  label: string;
  /**
   * Image to show
   */
  image: string;
  /**
   * Alt text for image
   */
  text: string;
  /**
   * Color of Card
   */
  color: "Primary" | "Orange" | "Teal" | "Blue";
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Slug part of the recipe url
   */
  slug: string;
  /**
   * Character for the recipe
   */
  character?: Character;
}

const getClassesFromColor = (color: string, unlocked: boolean) => {
  if (unlocked) {
    switch (color) {
      case "Primary":
        return `relative unlocked bg-primary text-white shadow-xl hover:shadow-2xl`;

      case "Teal":
        return `relative unlocked bg-teal text-black shadow-xl hover:shadow-2xl`;

      case "Orange":
        return `relative unlocked bg-orange text-black shadow-xl hover:shadow-2xl`;

      default:
        return `relative unlocked bg-blue text-black shadow-xl hover:shadow-2xl`;
    }
  } else {
    return `relative locked bg-grey opacity-50 text-black shadow-xl hover:shadow-2xl`;
  }
};

const Card = ({
                unlocked = true,
                label,
                image,
                text,
                color,
                slug,
                character,
                ...props
              }: CardProps) => {
  return (
    <div
      className={[styles.card, getClassesFromColor(color, unlocked)]
        .join(" ")
        .trim()}
      {...props}
    >
      <div className=''>
        <div className='flex flex-col'>
          {character && (
            <>
              <div>
                <Link href={'/recipes/' + slug}>
                  {/*<a>*/}
                <div>
                  <div className={styles['card-image-container'] + " mt-8"}>
                    <Image
                      src={image}
                      layout='fill'
                      alt={text}
                      className={styles.image}
                    />
                  </div>
                    <h1 className='tracking-wide font-semibold text-2xl'>
                      {label}
                    </h1>
                    {/*</a>*/}
                  
                </div>
                </Link>
              </div>
              {/* Superhero on t0p of the recipe image */}
              <div
                className={
                  styles['splash-container'] +
                  ' absolute top-0 right-0 -mr-10 -mt-14 opacity-80'
                }
              >
                <Image
                  layout='fill'
                  src={explosion}
                  alt='explosion'
                  className={styles.image}
                />
              </div>
              <div
                className={
                  styles['image-container'] +
                  ' absolute top-0 right-0 -mr-2 -mt-16'
                }
              >
                <Image
                  layout='fill'
                  src={character.imageGif}
                  alt={character.name}
                  className={styles.image}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
