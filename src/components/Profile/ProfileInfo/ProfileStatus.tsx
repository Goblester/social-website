import React, {ChangeEvent, useEffect, useState} from 'react';
import './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string,
    setStatus: (status: string) => void,
    userId: number
    profileId: number
}

export function ProfileStatus(props: ProfileStatusPropsType) {
    const [editorMode, setEditorMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>(props.status);
    const isMe = props.userId === props.profileId;

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onInputBlur = () => {
        props.setStatus(status);
        setEditorMode(false)
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editorMode &&
            <div>
                <span onDoubleClick={() => isMe && setEditorMode(true)}>
                    {props.status ? props.status : '-------'}
                </span>
            </div>
            }
            {editorMode && isMe &&
            <div>
                <input onChange={onInputChange}
                       autoFocus={true}
                       onBlur={onInputBlur}
                       type="text"
                       value={status}/>
            </div>
            }
        </div>
    )
}

/*type ProfileStatusStateType = {
    editorMode: boolean,
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.state = {
            editorMode: false,
            status: this.props.status
        }
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value});
    }

    setEditorMode = (editMode: boolean) => {
        this.setState({editorMode: editMode});
    }

    onInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        this.setEditorMode(false);
        this.props.setStatus(e.currentTarget.value);
    }

    render() {
        const isMe = this.props.userId === this.props.profileId
        return (
            <div>
                {!this.state.editorMode &&
                <div>
                <span onDoubleClick={() => isMe && this.setEditorMode(true)}>
                    {this.props.status ? this.props.status : '-------'}
                </span>
                </div>
                }
                {this.state.editorMode && isMe &&
                <div>
                    <input onChange={this.onInputChange}
                           autoFocus={true}
                           onBlur={this.onInputBlur}
                           type="text"
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }

}*/

export default ProfileStatus;