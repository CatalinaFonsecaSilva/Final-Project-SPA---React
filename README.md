# The Endless Yarn

The Endless Yarn is a personal project I did during my time at _[DCI](https://digitalcareerinstitute.org/de/)_ to complete the Single Page Application module of my professional training.

**Live version:** [The endless yarn in React](https://final-project-spa-react.vercel.app/). [^1]

[^1]: After long struggle with GitHub Pages I managed to deploy my website with Vercel 😁. I confirmed on first hand that the first one is not a good idea to deploy SPA websites because of the routing problems with SPAs in GitHub Pages. "GitHub Pages is primarily designed to serve static sites, where each HTML, CSS or JavaScript file can be accessed directly from the browser. However, an SPA generally uses client-side routing (with tools like React Router) to navigate between different views without reloading the entire page. When a user reloads a direct URL or tries to access a deep URL (e.g., tuapp.com/user/profile), GitHub Pages doesn't know how to handle this because it looks for a physical file in that path and returns a 404 error if it can't find it". This information comes from ChatGPT and I paste it here as a lesson learned.

## Objective:

The goal of this project is to redesign the original project [The-endless-yarn](https://github.com/CatalinaF-S/The-endless-yarn) into a responsive website using my knowledge of `React`, `CSS` and `HTML`.

## Components:

1. **App Container**:
   It contains all the logic of the website. The components have access to this information through the Hook `useContext`.

2. **Navbar**:
   Responsive Navbar which in mobile view shows an interactive hamburger menu.

4. **Carousel**:
   Component that allows to visualize images in a predetermined order by using two buttons `next` and `previous` .

5. **Projects**:
   Under construction... It will contain the information of the knitted projects that I have realized in my free time.
   
## Pages:

- 🧶 Home
- 🧶 My Projects
- 🧶 My Inspiration: Using the API of [Pexels](https://www.pexels.com/)
- 🧶 About me

## Desktop view
![Desktop view](Desktop_view.png)

## Mobile view
![Mobile view](Mobile_view.png)
