
import React from 'react';

//import stock
import stock from "../img/image1.png";
// import stock1 from "../img/image2.png";
// import stock2 from "../img/image3.png";
// import stock3 from "../img/image4.png";
// import stock4 from "../img/image5.png";
// import stock5 from "../img/image6.png";
// const openInNewTab = (url) => {
//   const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
//   if (newWindow) newWindow.opener = null
// }

class Portfolio extends React.Component {
  render() {
    return (
      <div className="projects-grid">
      {/* Project 1 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project 2 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      {/* Project 3 */}
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
        <CardText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    </div>


  )
} else if(this.state.activeTab === 1) {
  return (
    <div><h1>This is Angular</h1></div>
  )
} else if(this.state.activeTab === 2) {
  return (
    <div><h1>This is VueJS</h1></div>
  )
} else if(this.state.activeTab === 3) {
  return (
    <div><h1>This is MongoDB</h1></div>
  )
}

}



render() {
return(
  <div>
    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
      <Tab>React</Tab>
      <Tab>Angular</Tab>
      <Tab>VueJS</Tab>
      <Tab>MongoDB</Tab>
    </Tabs>


      <Grid>
        <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
        </Cell>
      </Grid>


  </div>
)
    </section>      
);
    
  }
}

export default Portfolio;
