import AvatarJpg from '@/assets/EYNViD6GFIs.jpg'
import Icon from '@/assets/icon.svg'

const Profile = () => {

    return (
        <div>
            <div>Профиль</div>
            <img width={100} height={100}  src={AvatarJpg} />
            <Icon width={40} height={40}/>
            {'AvatarJpg = ' + AvatarJpg}
        </div>
    )
}

export default Profile