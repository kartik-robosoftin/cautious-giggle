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
                setupNode('v16.16.0')
            }
        }

        stage("Run tests") {
            parallel {
                stage('Prettier test') {
                    steps {
                        nodejs(nodeJSInstallationName: 'Node 16') {
                            sh 'npm run prettier:check'
                        } 
                    }
                }
                stage('Unit test') {
                    steps {
                        nodejs(nodeJSInstallationName: 'Node 16') {
                            sh 'npm test'
                        }   
                    }
                }
            }
        }

        stage("Generate build") {
            when {
                branch 'main'
            }
            steps {
                nodejs(nodeJSInstallationName: 'Node 16') {
                    sh 'npm run build'
                }   
            }
        }

        stage('Deploy to production') {
            when {
                branch 'main'
            }
            steps {
                timeout(time: 15, unit: "MINUTES") {
                    input message: "Do you want to approve production deployment?", ok: 'Yes'
                }

                echo "Deploying...."
            }
        }
     }
}