import React, { Component } from 'react';

class SoftgelChoices extends Component {
  constructor(props) {
    super()

    this.state = {
      selectionName: 'quantity',
      selectionValue: 100
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.updateSelectionsObject(this.state)
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ selectionName: name, selectionValue: value });
  }

  handleChangeNoButton = (event) => {
    const { name, value } = event.target
    this.setState({ selectionName: name, selectionValue: value }, () => this.handleClick(event))
  }



  displayChoice = (status) => {
    switch (status) {
      case 0:
        return <article>
          <h4>Please select the number of bottles you're interested in:</h4>
          <form>
            <input
              type="number"
              placeholder="100"
              name="quantity"
              value={this.state.selectionValue}
              onChange={this.handleChange}
            />
            <button onClick={this.handleClick}>SUBMIT</button>
          </form>
        </article>
      case 1:
        return <article>
            <h4>Please select your softgel size:</h4>
            <form>
              <input type="radio" id="15mg" name="container" value="15mg" onChange={this.handleChangeNoButton} />
              <label for="15mg">15mg</label>
              <input type="radio" id="25mg" name="container" value="25mg" onChange={this.handleChangeNoButton} />
              <label for="25mg">25mg</label>
            </form>
          </article>
      // case 2:
      //   return <article>
      //     <h4>Please select your flavor:</h4>
      //     <form>
      //       <input type="radio" id="guava-lime" name="flavor" value="Guava Lime" onChange={this.handleChangeNoButton} />
      //       <label for="guava-lime">Guava Lime</label>
      //       <input type="radio" id="mocha" name="flavor" value="Mocha" onChange={this.handleChangeNoButton} />
      //       <label for="mocha">Mocha</label>
      //       <input type="radio" id="mojito" name="flavor" value="Mojito" onChange={this.handleChangeNoButton} />
      //       <label for="mojito">Mojito</label>
      //       <input type="radio" id="orange-creamsicle" name="flavor" value="Orange Creamsicle" onChange={this.handleChangeNoButton} />
      //       <label for="orange-creamsicle">Orange Creamsicle</label>
      //       <input type="radio" id="peppermint" name="flavor" value="Peppermint" onChange={this.handleChangeNoButton} />
      //       <label for="peppermint">Peppermint</label>
      //       <input type="radio" id="mint-chocolate" name="flavor" value="Mint Chocolate" onChange={this.handleChangeNoButton} />
      //       <label for="mint-chocolate">Mint Chocolate</label>
      //       <input type="radio" id="unflavored" name="flavor" value="unflavored" onChange={this.handleChangeNoButton} />
      //       <label for="unflavored">unflavored</label>
      //     </form>
      //   </article>
      case 2:
        return <article>
            <h4>Please select your carrier oil:</h4>
            <form>
              <input type="radio" id="wheat-germ-oil" name="carrier" value="Wheat Germ Oil" onChange={this.handleChangeNoButton} />
              <label for="wheat-germ-oil">Wheat Germ Oil</label>
              <input type="radio" id="mct-oil" name="carrier" value="MCT Oil" onChange={this.handleChangeNoButton} />
              <label for="mct-oil">MCT Oil</label>
            </form>
          </article>
      case 3:
        return <article>
            <h4>Please select your spectrum:</h4>
            <form>
              <input type="radio" id="full-spectrum" name="spectrum" value="Full Spectrum" onChange={this.handleChangeNoButton} />
              <label for="full-spectrum">Full Spectrum</label>
              <input type="radio" id="broad-spectrum" name="spectrum" value="Broad Spectrum" onChange={this.handleChangeNoButton} />
              <label for="broad-spectrum">Broad Spectrum</label>
            </form>
          </article>
      case 4:
        return <article>
            <h4>Please select your potency per serving:</h4>
            <form>
              <input type="radio" id="15mg" name="potency" value="15 mg" onChange={this.handleChangeNoButton} />
              <label for="15mg">15 mg</label>
              <input type="radio" id="25mg" name="potency" value="25 mg" onChange={this.handleChangeNoButton} />
              <label for="25mg">25 mg</label>
              {/* <input type="radio" id="30mg" name="potency" value="30 mg" onChange={this.handleChangeNoButton} />
              <label for="30mg">30 mg</label>
              <input type="radio" id="50mg" name="potency" value="50 mg" onChange={this.handleChangeNoButton} />
              <label for="50mg">50 mg</label> */}
            </form>
          </article>
      case 5:
        return <article>
            <h4>Please select the number of softgels per bottle:</h4>
            <form>
              <input type="radio" id="30-softgels" name="softgelPerBottle" value="30" onChange={this.handleChangeNoButton} />
              <label for="30-softgels">30 softgels per bottle</label>
              <input type="radio" id="60-softgels" name="softgelPerBottle" value="60" onChange={this.handleChangeNoButton} />
              <label for="60-softgels">60 softgels per bottle</label>
            </form>  
          </article> 
      case 6:
        return <article>
          <p>This is the label selection section</p>
        </article>
      default:
        return <div>We're sorry, something seems to have gone wrong. Please reload the page.</div>
    }
  }

  render() {
    return <section>
        { this.displayChoice(this.props.currentDisplay) }
      </section>
  }
}

export default SoftgelChoices;