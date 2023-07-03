library(
    identifier: 'jenkins-shared-library@main',
    retriever: modernSCM([
        $class: 'GitSCMSource',
        remote: 'https://github.com/kartik-robosoftin/jenkins-shared-library.git',
        credentialsId: 'Jenkins-PAT'
    ])
)

pipeline {
    agent any
    environment {
        APP_TOKEN = credentials('89ad9979-b168-48c6-8755-36e0fd445de0')
    }

    stages {
        stage("Install dependencies") {
            steps {
                nodejs(nodeJSInstallationName: 'Node 16.x') {
                    sh 'npm --version'
                }
                    sh 'npm --version'
                    sh 'npm ci'
            }
        }
    }
}