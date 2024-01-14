/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type PropType = {
    slides: string[];
    options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    // console.log(slides)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__inner">
                                <img
                                    className="embla__slide__img"
                                    src={slide}
                                    alt=""
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`
                
                absolute left-0 right-0 -bottom-6
                justify-center items-center
                -z-10 flex
                flex-row gap-1
            `}>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={"embla__dot".concat(
                                index === selectedIndex
                                    ? " embla__dot--selected"
                                    : ""
                            )}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Carousel;
