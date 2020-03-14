import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  }

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({discountStart: this.state.discountStart + 1})
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage()
    }, 30)
  }

  render() {
    return (
      <div class="center_wrapper">
        <div class="discount_wrapper">

          <Fade
            onReveal={() => this.porcentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>off</span>
            </div>
          </Fade>

          <Slide>
            <div className="discount_description">
              <h3>Purchase tickets before blah blah</h3>
              <p>viwqon oveiwqonxcoz an ioewqn obsauo ewqbnuovsanbuob qbwuonkjxo  buoiew buowanjodw qqwin dc cnbuiqwu938b vsbcvuiabuibcvzbvniqwb hjiwbuvdiw uh29hka hjiw.</p>
              <div>
                button
              </div>
            </div>
          </Slide>

        </div>
      </div>
    );
  }
}

export default Discount;
