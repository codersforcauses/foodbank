import { Client } from "@notionhq/client";
import { useState, useEffect } from 'react'

const recipesNotion = ({ data, chars, reps }) => {

  const [recipes, setRecipes] = useState([])
  const [characters, setCharacters] = useState([])

  // run once on page load
  useEffect(() => {
    setCharacters(chars)
    setRecipes(reps)
  }, [])
  
  
  return <>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    
    {
      console.log(chars)
      
    }
    {/*<pre>{JSON.stringify(recipes, null, 2)}</pre>*/}
  </>;
};

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY
  });

  const data = await notion.databases.query({
    database_id: process.env.NOTION_RECIPES_DB_ID
  });
  
  const chars = await notion.databases.query({
    database_id: process.env.NOTION_CHARACTERS_DB_ID,
  })
  
  // const getCharacterProps = (charId: String) => {
  //   characters.results.map(char => {
  //     if (char.id === charId) {
  //       imageGif = char.properties.imageGif.files[0].file.url
  //       imageGif = char.properties.imageGif.files[0].file.url
  //       imageGif = char.properties.imageGif.files[0].file.url
  //     }
  //   })
  // }

  const reps = data.results.map(recipe => ({
    page_id: recipe.id,
    name: recipe.properties.Recipe.title[0].plain_text,
    categories: recipe.properties.Category.multi_select.map(category => category.name),
    tags: recipe.properties.Tags.multi_select.map(tag => tag.name),
    equipment: recipe.properties.Equipment.multi_select.map(item => item.name),
    ingredients: recipe.properties.ingredients.multi_select.map(item => item.name), 
    equipmentImg: recipe.properties.equipmentImg.files[0].file.url,
    ingredientsImg: recipe.properties.ingredientsImg.files[0].file.url,
    finalShot: recipe.properties.finalShot.files[0].file.url,
    colorScheme: recipe.properties.colorScheme.rich_text[0].plain_text,
    hint: recipe.properties.hint.rich_text[0] ? recipe.properties.hint.rich_text[0].plain_text : '',
    slug: recipe.properties.slug.rich_text[0].plain_text,
    character: recipe.properties.characterId.relation[0].id
  }));

  return {
    props: {
      data,
      reps,
      chars
    }
  };
};
export default recipesNotion;
