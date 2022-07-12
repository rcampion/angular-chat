import { Component, OnInit, ViewChild } from '@angular/core';
import { CompatClient, Message, Stomp, StompSubscription } from '@stomp/stompjs';

import SockJS from 'sockjs-client';

import { getAudio, getButton, getButtons, getInput, getSpan } from "./../../utils/html-utils";
import { environment } from '../../../environments/environment';
import { BehaviorSubject, filter, first, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { SocketClientState } from 'src/app/core/services/socket-client-state';
//import { GroupChatService } from 'src/app/core/services/group-chat.service';
//import { SocketClientOneService } from 'src/app/core/services/socket-client-one.service';
import { PopupComponent } from 'src/app/utils/popup/popup.component';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	@ViewChild("popupChat") chat: PopupComponent;

	private state: BehaviorSubject<SocketClientState>;

	static jsonHandler(message: Message): any {
		console.log(message.body)
		return JSON.parse(message.body);
	}

	static textHandler(message: Message): string {
		return message.body;
	}

	private stompClient: CompatClient;

	//serverSpan;
	//targetSpan;
	connectButton; // = HTMLButtonElement;
	//callButton;
	//hangupButton;
	disconnectButton;

	fromText;
	text;

	messages99: any;
	mysubid99 = 'my-subscription-id-099';
	private unsubscribeSubject: Subject<void> = new Subject<void>();

	//private wsDataService: SocketClientOneService

	constructor(
		//private groupChatService: GroupChatService,
	) { }

	ngOnInit(): void {
	}

	public setConnected(connected: boolean) {
		//this.serverSpan = getSpan("server");
		//this.targetSpan = getSpan("target");
		//this.connectButton = getButton("connect");
		//this.callButton = getButton("call");
		//this.hangupButton = getButton("hangup");
		//this.disconnectButton = getButton("disconnect");
		this.connectButton = getButton("connect");
		this.connectButton.disabled = connected;
		//document.getElementById('connect').disabled = connected;

		this.disconnectButton = getButton("disconnect");
		this.disconnectButton.disabled = !connected;
		//document.getElementById('disconnect').disabled = !connected;

		document.getElementById('conversationDiv').style.visibility
			= connected ? 'visible' : 'hidden';
		document.getElementById('response').innerHTML = '';
	}
	/*
		public connect() {
			//var socket = new SockJS('/chat');
			this.stompClient = Stomp.over(function() {
				return new SockJS(environment.ws_url);
			});
			//this.stompClient = Stomp.over(socket);
			this.stompClient.connect({}, function(frame) {
				//this.setConnected(true);
				console.log('Connected: ' + frame);
				this.stompClient.subscribe('/topic/messages', function(messageOutput) {
					this.showMessageOutput(JSON.parse(messageOutput.body));
				});
			});
		}
	*/

	//connect(): Observable<CompatClient> {

	/*

	this.stompClient = Stomp.over(function() {
		return new SockJS(environment.ws_url);
	});

	// Add the following if you need automatic reconnect (delay is in milli seconds)
	this.stompClient.reconnect_delay = 5000;

	this.state = new BehaviorSubject<SocketClientState>(SocketClientState.ATTEMPTING);

	this.stompClient.connect({}, () => {
		this.state.next(SocketClientState.CONNECTED);
	});

	this.asyncWait();

	return new Observable<CompatClient>(observer => {
		this.state.pipe(filter(state => state === SocketClientState.CONNECTED)).subscribe(() => {
			observer.next(this.stompClient);
		});
	});
*/

	/*
			this.wsDataService.connect().subscribe(res => {
				//console.log(res);
				this.messages69 = this.groupChatService
					.onUpdate(this.mysubid69)
					.pipe(takeUntil(this.unsubscribeSubject))
					.subscribe(post => {
						console.log(post);
					});
			});
		}
	*/

	/*
		connect() {
	
			this.connectToSocket().subscribe(res => {
				//console.log(res);
				this.messages99 = this.groupChatService
					.onUpdate(this.mysubid99)
					.pipe(takeUntil(this.unsubscribeSubject))
					.subscribe(post => {
						console.log(post);
						this.showMessageOutput(post)
					});
			});
	
			this.wsDataService.connect().subscribe(res => {
				//console.log(res);
				this.messages99 = this.groupChatService
					.onUpdate(this.mysubid99)
					.pipe(takeUntil(this.unsubscribeSubject))
					.subscribe(post => {
						console.log(post);
					});
			});
		}
	*/

	login() {
		this.connect().subscribe(res => {
			//console.log(res);
			this.messages99 =
				this.onMessage(this.mysubid99,"/topic/chat")
					.pipe(takeUntil(this.unsubscribeSubject))
					.subscribe(post => {
						console.log(post);
						this.showMessageOutput(post);
					});
		});
	}

	connect(): Observable<CompatClient> {

		this.stompClient = Stomp.over(function() {
			return new SockJS(environment.ws_url);
		});

		// Add the following if you need automatic reconnect (delay is in milli seconds)
		this.stompClient.reconnect_delay = 5000;

		this.state = new BehaviorSubject<SocketClientState>(SocketClientState.ATTEMPTING);

		this.stompClient.connect({}, () => {
			this.state.next(SocketClientState.CONNECTED);
		});

		this.asyncWait();

		return new Observable<CompatClient>(observer => {
			this.state.pipe(filter(state => state === SocketClientState.CONNECTED)).subscribe(() => {
				observer.next(this.stompClient);
			});
		});
	}

	async asyncWait() {
		const value = await this.waitForOneSecond();
		console.log(value);
	}

	waitForOneSecond() {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve('I promise to return after one second!');
			}, 1000);
		});
	}

	onPlainMessage(id: string, topic: string): Observable<string> {
		return this.onMessage(id, topic, ChatComponent.textHandler);
	}
	
	onMessage(id: string, topic: string, handler = ChatComponent.jsonHandler): Observable<any> {
		return this.connect().pipe(first(), switchMap(inst => {
			return new Observable<any>(observer => {
				const subscription: StompSubscription = inst.subscribe(topic, message => {
					observer.next(handler(message));
				}, { id });
				return () => inst.unsubscribe(subscription.id);
			});
		}));
	}
	/*
		onUpdate(id: string): Observable<any> {
			// return this.socketClient.onMessage(id, '/topic/contacts/update').pipe(map(post => ContactsPostService.getPostListing(post)));
			//return newFunction(this);
	
			return this.newMethod(id);
	
			function newFunction(that): Observable<any> {
				return that.stompClient.subscribe('/topic/chat', id);
			}
		}
	*/
	/*
		onUpdate(id: string): Observable<any> {
			// return this.socketClient.onMessage(id, '/topic/contacts/update').pipe(map(post => ContactsPostService.getPostListing(post)));
			return this.stompClient.subscribe('/topic/user/auth', id);
		}
	
		public subscribe(destination: string, id: string): Observable<any> {
			var client = this.stompClient;
			return new Observable<any>(observer => {
				//const subscription: StompSubscription = 
				client.subscribe(destination, message => {
					observer.next(ChatComponent.jsonHandler(message));
				}, { id });
			});
		}
	*/

	disconnect() {
		if (this.stompClient != null) {
			this.stompClient.disconnect();
		}
		//this.setConnected(false);
		console.log("Disconnected");
	}

	sendMessage() {

		//this.connectButton = getButton("connect");
		this.fromText = getInput('from');
		//var from = document.getElementById('from').value;
		var from = this.fromText.value;

		this.text = getInput('text');

		//var text = document.getElementById('text').value;
		var text = this.text.value;
		this.stompClient.send("/topic/chat", {},
			JSON.stringify({ 'from': from, 'text': text }));
	}

	showMessageOutput(messageOutput) {

		var response = document.getElementById('response');
		var p = document.createElement('p');
		p.style.wordWrap = 'break-word';
		var date = new Date();
		p.appendChild(document.createTextNode(messageOutput.from + ": "
			+ messageOutput.text + " (" + date + ")"));
		response.appendChild(p);
	}

	openChat() {
		this.chat.popup("https://www.zdslogic.com/webchat.html");
	}
}
