#setting up base image
FROM node:14

#set the working directory
WORKDIR /app

#copy code into container
COPY . .

#required commands to run or compile
RUN npm install

#expose the application port
EXPOSE 3000

#Run 
CMD ["npm", "start"]



