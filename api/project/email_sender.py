import base64
from email.mime.text import MIMEText
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from requests import HTTPError

SCOPES = [
        "https://www.googleapis.com/auth/gmail.send"
    ]

def send_email(to, subject, body):
  flow = InstalledAppFlow.from_client_secrets_file(r'/Users/sasidharjasty/YMP-website/Ymp2/api/project/credentials.json', SCOPES)
  creds = flow.run_local_server(port=0)

  service = build('gmail', 'v1', credentials=creds)
  message = MIMEText(body)
  message['to'] = to
  message['subject'] = subject
  create_message = {'raw': base64.urlsafe_b64encode(message.as_bytes()).decode()}

  try:
      message = (service.users().messages().send(userId="me", body=create_message).execute())
      print(F'sent message to {message} Message Id: {message["id"]}')
  except HTTPError as error:
      print(F'An error occurred: {error}')
      message = None