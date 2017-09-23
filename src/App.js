import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

class StudentsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
    this.handleStudentsUpVote = this.handleStudentsUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({ students });
  }

  handleStudentsUpVote(studentsId) {
    const nextStudents = this.state.students.map((students) => {
      if (students.id === studentsId) {
        return Object.assign({}, students, {
          votes: students.votes + 1,
        });
      } else {
        return students;
      }
    });
    this.setState({
      students: nextStudents,
    });
  }

  render() {
    const students = this.state.students.sort((a,b) => (
      b.votes - a.votes
    ))
    const studentsComponents = students.map((student) => (
      <Students
        key={'students-' + student.id}
        id={student.id}
        title={student.title}
        description={student.description}
        url={student.url}
        votes={student.votes}
        submitterAvatarUrl={student.submitterAvatarUrl}
        studentImageUrl={student.studentImageUrl}
        onVote={this.handleStudentsUpVote}
      />
    ));
    return (
      <div className='ui unstackable items'>
        {studentsComponents}
      </div>
    );
  }
}

class Students extends React.Component {
  constructor(props){
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.studentImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon'/>
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StudentsList;
