import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { PiCaretRight, PiCaretLeft } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section } from "./styles";
import { DishCard } from "../DishCard";

export function CardsSection({ dishesData, sectionName, category, favorites }) {

  const [favList, setFavList] = useState([]);

  const filteredCards = dishesData.filter(c => c.category === category);

  useEffect(() => {
    setFavList(favorites)
  }, [favorites]);

  return (
    <Section className="card-section">

      {
        filteredCards.length > 0 &&
        <>
          <h1>{sectionName}</h1>

          <div id='slider'>
            <Swiper
              slidesPerView={1.7}
              spaceBetween={5}
              navigation              
              loop
              mousewheel
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                480: {
                  slidesPerView: 2.5,
                  spaceBetween: 10
                },
                620: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 3.1,
                  spaceBetween: 11
                },
                1024: {
                  slidesPerView: 3.7,
                  spaceBetween: 13
                },
                1280: {
                  slidesPerView: 4.8,
                  spaceBetween: 15
                },
              }}
            >
              {
                filteredCards.map((card) => (
                  <SwiperSlide
                    key={"dish-" + card.dish_id}
                  >
                    <DishCard
                      key={"dish-card-" + card.dish_id}
                      dishId={card.dish_id}
                      title={card.title}
                      imageFile={card.image_file ? 
                        `${api.defaults.baseURL}/files/${card.image_file}` 
                        : 
                        null}
                      description={card.description}
                      price={card.price}
                      favorites={favList}
                    />
                  </SwiperSlide>
                )
                )}
              <div id='gradient-layer'>
                <PiCaretLeft>
                  <span className="sr-only">{`Botão para deslizar carrossel de ${sectionName} para esquerda` }</span>
                </PiCaretLeft>
                <PiCaretRight>
                  <span className="sr-only">{`Botão para deslizar carrossel de ${sectionName} para direita` }</span>
                </PiCaretRight>
              </div>
              <span className="sr-only">{`Carrossel com cartões de ${sectionName}`}</span>
            </Swiper>

          </div>
        </>
      }

    </Section>
  )
}