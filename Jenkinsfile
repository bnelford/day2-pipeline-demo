pipeline {
    agent any
    stages {
        stage ('Prereqs') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Package') {
            steps {
                sh 'docker build -t bnelford/marco-polo-day2 .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p --name marco-polo-bcn 30000:3000 bnelford/marco-polo-day2:latest'
            }
        }
    }
}