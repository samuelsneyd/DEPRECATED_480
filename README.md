# 480

https://retreat-480.herokuapp.com/

### Tech stack

<table>
  <thead>
    <td>TypeScript</td>
    <td>JavaScript</td>
    <td>React</td>
    <td>Python</td>
    <td>Django</td>
    <td>PostgreSQL</td>
  </thead>
  <tbody>
    <tr>
      <td><img alt="TypeScript" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /></td>
      <td><img alt="JavaScript" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></td>
      <td><img alt="React" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></td>
      <td><img alt="Python" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /></td>
      <td><img alt="Django" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" /></td>
      <td><img alt="PostGreSQL" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" /></td>
    </tr>
  </tbody>
</table>
<table>
  <thead>
    <td>HTML</td>
    <td>CSS</td>
    <td>Heroku</td>
    <td>AWS</td>
    <td>Github</td>
    <td>Git</td>
  </thead>
  <tbody>
    <tr>
      <td><img alt="HTML5" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" /></td>
      <td><img alt="CSS3" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" /></td>
      <td><img alt="Heroku" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg"/></td>
      <td><img alt="AWS" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"/></td>
      <td><img alt="GitHub" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"/></td>
      <td><img alt="Git" height=50 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"/></td>
    </tr>
  </tbody>
</table>

## About

480 is a Django/React web application with some basic content-management features. It is built as a marketing and
booking website for accommodation in Northland. It is still a work in progress with several more features to be
completed, pending discussions with the owner.

The frontend uses TypeScript, React, and the Material UI component library.

The backend uses Django and the Django Rest API framework for several endpoints. There are basic CRUD functionalities
using a PostgreSQL database to save emails and upload images to an Amazon Web Services S3 bucket. Emails are sent using
Gmail's API, and images can be displayed on the frontend.

480 is hosted on Heroku, and has a full CI/CD pipeline with automatic building, unit tests, and deployment from GitHub
after pushing to the production branch.
