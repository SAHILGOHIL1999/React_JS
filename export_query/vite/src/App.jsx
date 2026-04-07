

// 1. Export the Profile component 

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/lICfvbD.jpg"
//       alt="Aklilu Lemma"
//     />
//   );
// }
// export default Profile;


// 2. Fix the return statement

// export default function Profile() {
//   return (
//     <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
//   )
// }


// 3. spote the mistake

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/QIrZWGIs.jpg"
//       alt="Alan L. Hart"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }

// 4.
// export default function xyz() {
//   return (
//     <h1>Hello World!</h1>
//   );
// }


// 5 Try out some challenges

import Gallery from './componet/Gallery';
import  {Profile}  from './componet/Profile';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}

