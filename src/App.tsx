import Gallery from "./components/Gallery";


function App() {
  return (
    <div className="App">
      <Gallery
        photos={[
          { id: 1, src: '/photos/1.jpg', description: 'title' },
          { id: 2, src: '/photos/2.jpg', description: 'title' },
          { id: 3, src: '/photos/3.jpg', description: 'title' },
          { id: 4, src: '/photos/4.jpg', description: 'title' },
          { id: 5, src: '/photos/5.jpg', description: 'title' },
          { id: 6, src: '/photos/6.jpg', description: 'title' },
          { id: 7, src: '/photos/7.jpg', description: 'title' },
        ]}
      />
    </div>
  );
}

export default App;
