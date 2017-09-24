import fire from './fire':
class StudentsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
    this.handleStudentsUpVote = this.handleStudentsUpVote.bind(this);
  }

  
  componentDidMount() {
    this.setState({ students: Seed.students });
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

ReactDOM.render(
  <StudentsList />,
  document.getElementById('content')
);
