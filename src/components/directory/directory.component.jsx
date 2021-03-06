import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import {
  DirectoryMenu
} from './directory.styles';

const Directory = ({sections, history}) =>  {
        return (
            <DirectoryMenu>
            {

              sections.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))
                
            }
            </DirectoryMenu>
        )
    };

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
