import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {    
    return (
        <ul className={ styles.friendList}>
      {friends.map((friend) => {
          return (<li key={friend.id} className={ styles.friendListItem}>
              <FriendListItem friend={friend} />
          </li>
          );
      })}
    </ul>
    );
};

export default FriendList;
