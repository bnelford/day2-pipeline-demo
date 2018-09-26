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
                sh 'docker run -d --name marco-polo-bcn -p 30000:3000 bnelford/marco-polo-day2:latest'
                sh 'sleep 5'
            }
        }
        stage('Run Integration Tests') {
            steps {
                sh 'npm test integrationtests/integrationtests.js'
            }
        }
    }
    post {
        cleanup {
            sh 'docker kill marco-polo-bcn'
            sh 'docker rm marco-polo-bcn'
        }
    }
}