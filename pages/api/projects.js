
export default function projects(req, res) {
  res.status(200).json({
    projects: [
      {
        "id": "1",
        "name": "Moblie Weather App",
        "slug": "mobile-weather-app",
        "description": "Developed a mobile weather app using Flutter that displays the weather and a background picture based on the weather. ",
        "image": "/images/weatherapp.png",
        "link": "https://github.com/romaine877/weather_app"
      },
      {
        "id": "2",
        "name": "Checklist App",
        "slug": "checklist-app",
        "description": "Developed a checklist app that allows users to make a list of items. Firebase functionality will be added soon.",
        "image": "/images/check.png",
        "link": "https://github.com/romaine877/checkme"
      },
      {
        "id": "3",
        "name": "Eccomerce App",
        "slug": "ecommerce-app",
        "description": "Developed an ecommerce app using state management and firebase. The app allows users to add items to their cart and view their cart.",
        "image": "/images/shopapp.png",
        "link": "https://github.com/romaine877/sigma_store"
      },
      {
        "id": "4",
        "name": "Todo App",
        "slug": "todo-app",
        "description": "Developed a simple full stack todo app using React, NodeJs and MongoDB. The app allows users to add items and view their todo list.",
        "image": "/images/todo.png",
        "link": "https://github.com/romaine877/mern-crud"
      }
    ]
  }
  )
}

