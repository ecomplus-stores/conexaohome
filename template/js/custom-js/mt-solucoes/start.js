import { addClassOnClasses } from "./home/addClassOnSections/";
import { initCategoryPage } from "./categoryPage";
import { initHeader } from "./header/initHeader";
import { initProductPage } from "./productPage";
import { initCartPage } from "./cartPage";
import { initFooter } from "./footer";
import { initMobile } from "./mobile";

// INIT HEADER
document.querySelector(".header") ? initHeader() : null;

// CATEGORY PAGE
document.querySelector("#page-categories") ? initCategoryPage() : null;

//PRODUCT PAGE
document.querySelector("#page-products") ? initProductPage() : null;

// HOME
document.querySelector(".page--home") ? addClassOnClasses() : null;

// FOOTER
document.querySelector("footer.foo") ? initFooter() : null;

window.addEventListener("load", (event) => {
  window.matchMedia("(max-width: 768px)").matches ? initMobile() : null;
});

// LOGIN ACCOUNT PAGE

// async function fetchGridsJSON() {
//   const headers = {
//     "Content-Type": "application/json",
//     "X-Store-ID": 50359
//     // 'Content-Type': 'application/x-www-form-urlencoded',
//   }
//   const response = await fetch('https://api.e-com.plus/v1/grids.json?grid_id=64ca9f2a5e606903707d50b9', {headers});
//   const grids = await response.json();
//   return grids;
// }

// fetchGridsJSON().then(grids => {
//   console.log(grids); // fetched movies
// });

// const search = new EcomSearch()
// // Run search request and list spec options
// async function teste () {
//   await search.fetch()
//   search.getSpecs().forEach(aggSpec => {
//     console.log(aggSpec)
//   })
// }

// teste()

async function fetchSpecificGridItems() {
  let headersList = {
    "X-Store-ID": "51316",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    query: {
      bool: {
        filter: [
          {
            nested: {
              path: "specs",
              query: {
                bool: {
                  filter: [
                    {
                      term: {
                        "specs.grid": "tipo_cadeira",
                      },
                    },
                    {
                      terms: {
                        "specs.text": ["cadeira-genebra"],
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  });

  let response = await fetch(
    "https://apx-search.e-com.plus/api/v1/items.json",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  let items = [];
  data.hits.hits.forEach(element => items.push(element))

  console.log("tipo_cadeira ids items", items)
}
// fetchSpecificGridItems();
