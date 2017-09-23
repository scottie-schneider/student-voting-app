window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 10));
  }

  const students = [
    {
      id: 1,
      title: 'Scottie Schneider',
      description: 'Has one friend, and that friend has no friends.',
      url: 'https://github.com/scottie-schneider',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/scottie.png',
      studentImageUrl: 'images/avatars/scottie.png',
    },
    {
      id: 2,
      title: 'Sean Baier',
      description: 'More friends than Scottie. Might be Captain America. Enjoys crayons.',
      url: 'https://github.com/seantbaier',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/scottie.png',
      studentImageUrl: 'images/students/sean.jpeg',
    },
    {
      id: 3,
      title: 'Ron Rutherford',
      description: 'Because you know I\'m all about that database, no treble.',
      url: 'https://github.com/rcrutherford',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/scottie.png',
      studentImageUrl: 'images/students/ron.jpeg',
    },
    {
      id: 4,
      title: 'Trinity Seimer',
      description: 'Honey badger don\'t care.',
      url: 'https://github.com/tsiemer',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/scottie.png',
      studentImageUrl: 'images/students/trin.jpeg',
    },
    {
      id: 5,
      title: 'Drake Seimer',
      description: 'Certainly not dragon behind.',
      url: 'https://github.com/dsiemer',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/scottie.png',
      studentImageUrl: 'images/students/drake.jpeg',
    },
    {
      id: 6,
      title: 'Kevin Wilde',
      description: 'He\'s a wilde man.',
      url: 'https://github.com/kevinawilde',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/scottie.png',
      studentImageUrl: 'images/students/kevin.png',
    },
    {
      id: 7,
      title: 'Shalay Mefford',
      description: 'Will Shalay your coding fears.',
      url: 'https://github.com/ashleymefford',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/scottie.png',
      studentImageUrl: 'images/students/shalay.png',
    },
    {
      id: 8,
      title: 'Tanner Heaps',
      description: 'Stealth snark genius. Elbow aficionado.',
      url: 'https://github.com/tannerheaps01',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/scottie.png',
      studentImageUrl: 'images/students/tanner.jpeg',
    },
  ];

  return { students: students };
}());
