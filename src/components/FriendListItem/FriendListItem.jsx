import styles from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
    return (
      <div className={ styles.friendListItemInfo}>
        <img src={ friend.avatar } alt="Avatar" width="48" />
        <p>{ friend.name }</p>
        <p className={friend.isOnline ? styles.online : styles.offline}>
          {friend.isOnline ? "Online" : "Offline"}
        </p>
    </div>
    );
};

export default FriendListItem;
