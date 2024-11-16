import express, { NextFunction, Request, Response } from 'express'
const app = express()

// parsers
app.use(express.json());
app.use(express.text());

// routers
const userRouter = express.Router();
const courseRouter = express.Router();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);

userRouter.get('/create-user', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is created successfully",
    data: user
  })
})

courseRouter.post('/create-course', (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "Course is created successfully",
    data: course
  })
})

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname)

  next()
}

app.get('/', logger, async (req: Request, res: Response) => {
  try {
    res.send(something);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "faild to get data"
    })
  }
})

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body)
  // res.send('got data') 
  res.json({
    "message": "Successfully received data"
  })
})

export default app;