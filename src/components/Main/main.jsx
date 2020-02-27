import React, { Component } from 'react';
import '../../assets/css/custom.css';
import add_user from '../../assets/images/icons/add_user.png';
import user_leave from '../../assets/images/icons/user_leave.png';
import broadcast_start from '../../assets/images/icons/broadcast_start.png';
import broadcast_stop from '../../assets/images/icons/broadcast_stop.png';
import user_connection_issue from '../../assets/images/icons/user_connection_issue.png';
import other_connection_issue from '../../assets/images/icons/other_connection_issue.png';
import webcam_issue from '../../assets/images/icons/webcam_issue.png';
import webcam_offline_icon from '../../assets/images/icons/webcam_offline_icon.png';
import darshan_badge from '../../assets/images/icons/darshan_badge.png';
import Icons from '../Icons/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Main extends Component {
    state = {
        toastBadgeShowClassName: 'hideMe',
        toastBadgeInitials: 'DJ',
        toastIconShowClassName: 'hideMe',
        icon: '',
        message: '',
        toastType: 'success',
        userBadgeShowClassName: 'hideMe'
    }

    notify = (id) => {
        // console.log(id);
        switch (id) {

            case 'addNewUser': this.setState({
                toastBadgeShowClassName: 'circle-with-text',
                toastIconShowClassName: 'hideMe',
                message: "Darshan Jain Joined at First Table",
                toastType: 'success',
                userBadgeShowClassName: 'userFloating'
            });
                break;

            case 'leaveNewUser': this.setState({
                toastBadgeShowClassName: 'circle-with-text',
                toastIconShowClassName: 'hideMe',
                message: "Darshan Jain Left from First Table",
                toastType: 'error',
                userBadgeShowClassName: 'hideMe'
            });
                break;

            case 'broadcastStart': this.setState({
                toastBadgeShowClassName: 'hideMe',
                toastIconShowClassName: 'toastIcon',
                icon: broadcast_start,
                message: "Broadcast message started",
                toastType: 'warning',
                userBadgeShowClassName: 'hideMe'
            });
                break;

            case 'broadcastStop': this.setState({
                toastBadgeShowClassName: 'hideMe',
                toastIconShowClassName: 'toastIcon',
                icon: broadcast_stop,
                message: "Broadcast message ended",
                toastType: 'warning',
                userBadgeShowClassName: 'hideMe'
            });
                break;

            case 'userConnectionIssue': this.setState({
                toastBadgeShowClassName: 'hideMe',
                toastIconShowClassName: 'toastIcon',
                icon: user_connection_issue,
                message: "You have Weak Internet Connectivity",
                toastType: 'error',
                userBadgeShowClassName: 'hideMe'
            });
                break;

            case 'otherUserConnectionIssue': this.setState({
                toastBadgeShowClassName: 'hideMe',
                toastIconShowClassName: 'toastIcon',
                icon: other_connection_issue,
                message: "Someone in the meeting have Weak Internet Connectivity",
                toastType: 'error',
                userBadgeShowClassName: 'hideMe'
            });
                break;

            case 'webcamIssue': this.setState({
                toastBadgeShowClassName: 'hideMe',
                toastIconShowClassName: 'toastIcon',
                icon: webcam_issue,
                message: "Your Webcam is not functioning as expected",
                toastType: 'error',
                userBadgeShowClassName: 'hideMe'
            });
                break;

            case 'othersWebcamIssue': this.setState({
                toastBadgeShowClassName: 'hideMe',
                toastIconShowClassName: 'toastIcon',
                icon: webcam_offline_icon,
                message: "Another user in the meeting have Webcam Issue",
                toastType: 'error',
                userBadgeShowClassName: 'hideMe'
            });
                break;

            default: this.setState({
                message: "BROOOOOOOOOOO",
            });
                break;
        }
    };


    componentDidUpdate() {
        if (this.state.toastType === 'success')
            this.showSuccessToast();
        else if (this.state.toastType === 'warning')
            this.showWarningToast();
        else if (this.state.toastType === 'error')
            this.showErrorToast();
        else this.showSuccessToast();
    }

    showSuccessToast = () => {
        var toastMessage = '';
        toastMessage = <div>
            <span className={this.state.toastBadgeShowClassName} >{this.state.toastBadgeInitials}</span>
            <img src={this.state.icon} alt="" id="toastIconShow" hidden />
            <span className="toastMessage">{this.state.message}</span>
        </div >;

        toast.success(toastMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    showErrorToast() {
        var toastMessage = '';
        toastMessage = <div>
            <span className={this.state.toastBadgeShowClassName} >{this.state.toastBadgeInitials}</span>
            <img src={this.state.icon} alt="" id="toastIconShow" className={this.state.toastIconShowClassName} />
            <span className="toastMessage">{this.state.message}</span>
        </div >;

        toast.error(toastMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    showWarningToast() {
        var toastMessage = '';
        toastMessage = <div>
            <span className={this.state.toastBadgeShowClassName} >{this.state.toastBadgeInitials}</span>
            <span className="toastMessage">{this.state.message}</span>
            <img src={this.state.icon} alt="" id="toastIconShow" className={this.state.toastIconShowClassName} />
        </div >;

        toast.warn(toastMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    render() {
        return (
            <div>
                <img src={darshan_badge} alt="Darshan Jain Joined" className={this.state.userBadgeShowClassName} id="darshan_badge" title="Darshan Jain Joined" />

                <Icons id={"addNewUser"} onNotifyClick={this.notify} badge={add_user} title={"Click here to See Add New User at First Table Notification"} className={"floating"} />

                <Icons id={"leaveNewUser"} onNotifyClick={this.notify} badge={user_leave} title={"Click here to see the User Left Notification"} className={"floating r1000"} />

                <Icons id={"broadcastStart"} onNotifyClick={this.notify} badge={broadcast_start} title={"Click here to See the Broadcast Start Notification"} className={"floating r850"} />

                <Icons id={"broadcastStop"} onNotifyClick={this.notify} badge={broadcast_stop} title={"Click here to See the Broadcast Stop Notification"} className={"floating r700"} />

                <Icons id={"userConnectionIssue"} onNotifyClick={this.notify} badge={user_connection_issue} title={"Click here to See User Connection Issue Notification"} className={"floating r550"} />

                <Icons id={"otherUserConnectionIssue"} onNotifyClick={this.notify} badge={other_connection_issue} title={"Click here to See Other User Connection Issue Notification"} className={"floating r400"} />

                <Icons id={"webcamIssue"} onNotifyClick={this.notify} badge={webcam_issue} title={"Click here to See your Webcam Issue Notification"} className={"floating r250"} />

                <Icons id={"othersWebcamIssue"} onNotifyClick={this.notify} badge={webcam_offline_icon} title={"Click here to See Others Webcam Issue Notification"} className={"floating r100"} />

                <ToastContainer />
            </div>
        );
    }
}

export default Main;