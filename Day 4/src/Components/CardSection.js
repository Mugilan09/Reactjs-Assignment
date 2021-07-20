import React from "react"
import Card from "./Card"

function CardSection(){
    return(
            <section class="contact bg-success ">
      <div class="container ">
        <h2 class="text-white">
          We love new friends!
        </h2>
        <div class="row">
            <Card Cardtitle="Orange" buttontext="Apple" 
             Carddescription="There are many variations of passages of Lorem Ipsum 
             available, but the majority have suffered alteration in some form, by 
             injected humour, or randomised words which don't look even slightly believable."/>
            <Card Cardtitle="Mango" buttontext="PineApple"  Carddescription="There are many variations 
            of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
            by injected humour, or randomised words which don't look even slightly believable."/>
            <Card Cardtitle="Guava" buttontext="Grapes"  Carddescription="There are many variations of 
            passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
            by injected humour, or randomised words which don't look even slightly believable."/>
        </div>
      </div>
    </section>
    )
}
export default CardSection