import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("event")}>
          <ListItemText primary='EVENT' />
        </ListItem>

        <ListItem button onClick={() => console.log("event")}>
          <ListItemText primary='CALENDAR' />
        </ListItem>

        <ListItem button onClick={() => console.log("blog")}>
          <ListItemText
            primary='BLOG'
            secondary='スタッフブログ'
          />
        </ListItem>

        <ListItem button onClick={() => console.log("about")}>
          <ListItemText
            primary='ABOUT'
            secondary='ギャラクシーについて'
          />
        </ListItem>

        <ListItem button onClick={() => console.log("pickup")}>
          <ListItemText
            primary='PICK UP'
            secondary='スタッフ一押しバンド！'
          />
        </ListItem>

        <ListItem button onClick={() => console.log("gallery")}>
          <ListItemText
            primary='GALLERY'
            secondary='フォトギャラリー'
          />
        </ListItem>

        <ListItem button onClick={() => console.log("wanted")}>
          <ListItemText
            primary='WANTED'
            secondary='出演バンド募集のお知らせ'
          />
        </ListItem>

      </List>
    </Drawer>
  );
};

export default SideDrawer;
