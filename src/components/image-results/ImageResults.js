import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class ImageResults extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        console.log('open');
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
              label="Close"
              primary={true}
              onClick={this.handleClose}
            />,
          ];
        let imageListContent;
        const {images} = this.props;
        if (images) {
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridTile
                            title={img.tags}
                            key={img.id}
                            subtitle={
                                <span> by <strong> { img.user } </strong> </span >
                            }
                            actionIcon={
                                <IconButton onClick={this.handleOpen}> 
                                    <ZoomIn color="white"/> 
                                </IconButton>
                            }>
                            <img src={img.largeImageURL} alt={img.title}/>
                        </GridTile>
                    ))}
                     <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        >
                        Discard draft?
                    </Dialog>
                </GridList>
            );
        } else {
            imageListContent = null;
        }
        return (
            <div>
                {imageListContent}
               
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;