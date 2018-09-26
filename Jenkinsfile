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
    }
}