import React from 'react';
import './Example.css';

class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className='f2 mh4'>
          {'This Magic Brain will detect faces in your pictures. Enter a URL of an image that has a face in it. Maybe something like these ...'}
        </p> <
        div className = "flex flex-wrap items-center justify-center" >
        <div className="flex-column pa4 ma4 center br3 pa2">
            <img src="https://picsum.photos/500?image=1062" alt="wrapped dog"/>
            <p className="center">https://picsum.photos/500?image=1062</p>
          </div> <
        div className = "flex-column pa4 ma4 center br3 pa2" >
        <img src="https://picsum.photos/500/?image=836" alt="woman playing guitar" /> <
        p className = "center" > https://picsum.photos/500/?image=836</p>
        <
        /div> <
        div className = "flex-column pa4 ma4 center br3 pa2" >
        <img src="https://picsum.photos/500/?image=804" alt="man napping on steering wheel" /> <
        p className = "center" > https://picsum.photos/500/?image=804</p>
        <
        /div> < /
        div >
      </React.Fragment>

    )
  }
}

export default Example;