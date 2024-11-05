import { createSystem, defaultConfig, defineConfig, defineRecipe } from "@chakra-ui/react";

const headingRecipe = defineRecipe({
  base: {
    color: "black",
  }
});

const textRecipe = defineRecipe({
  base: {
    color: "black",
  }
});

const config = defineConfig({
  theme: {
    breakpoints: {
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1800px',
    },
    recipes: {
      heading: headingRecipe,
      text: textRecipe,
    },
    tokens: {
      colors: {
        black: "#000",
      },
    },
  },
})

export default createSystem(defaultConfig, config)