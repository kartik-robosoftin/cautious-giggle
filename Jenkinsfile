library(
    identifier: 'jenkins-shared-library@main',
    retriever: modernSCM([
        $class: 'GitSCMSource',
        remote: 'https://github.com/kartik-robosoftin/jenkins-shared-library.git',
        credentialsId: 'Jenkins-PAT'
    ])
)

pipeline {
    agent none
    environment {
        APP_TOKEN = credentials('89ad9979-b168-48c6-8755-36e0fd445de0')
    }

    stages { 
        stage("Stage 1") {
        agent { label 'agent1'}
            steps {
                script {
                    log.info("Running in agent1")
                }  
            }
        }

        stage("Stage 2") {
            agent { label 'agent2'}
            parallel {
                stage('Prettier test') {
                    steps {
                        script {
                            log.info("Running in agent2")
                        } 
                    }
                }
                stage('Unit test') {
                    steps {
                        script {
                            log.info("Running in agent2")
                        }   
                    }
                }
            }
        }
     }
}