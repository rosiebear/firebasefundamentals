import React from 'react';

class AddEvent extends React.Component {
  handleSubmit(){
    var newEvent = this.event.value;
    this.event.value = '';
    this.props.addEvent(newEvent);
  }
  setRef(ref){
      this.note = ref;
  }
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control"
           placeholder="Add New Event" ref={(ref) => this.setRef(ref)} />
          <span className="input-group-btn">
              <button className="btn btn-default" type="button"
                  onClick={() => this.handleSubmit()}>
                  Submit
              </button>
          </span>
      </div>
    )
  }
}

AddEvent.propTypes = {
    user: React.PropTypes.string.isRequired,
    addEvent: React.PropTypes.func.isRequired
};

export default AddEvent;
