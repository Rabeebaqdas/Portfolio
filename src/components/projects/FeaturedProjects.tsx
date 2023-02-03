import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, HStack, Heading, Text, Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { featureProjects, FeatureProject } from "./config";
import { Skill } from "../skills/config";
import "./Projects.css";

const FeaturedProjects = () => {
  return(
    <div className="bg-projects">
      <p className="heading">Featured Projects</p>
      <p className="text">Take a look at my blockchain featured projects:</p>
      <div className="projects-grid">
        {featureProjects.map((project: FeatureProject) => {
          return(
            <div key={uuidv4()} className="project">
              <img src={project.image} />
              <div className="project-info">
                <Heading as='h4' size='lg'>
                  {project.name}
                </Heading>
                <Text fontSize='xl'>
                  {project.description}
                </Text>
                <div className="project-tags">
                  {project.technologies.map((tech: Skill) => {
                    return(
                      <a key={uuidv4()} href={tech.url} target="_blank">
                        <Tag size='lg' colorScheme='cyan' borderRadius='full' className="tech-tag">
                          <Avatar
                            src={tech.img}
                            size='xs'
                            name={tech.name}
                            ml={-1}
                            mr={2}
                          />
                          <TagLabel>{tech.name}</TagLabel>
                        </Tag>
                      </a>
                    )
                  })}
                </div>
                <HStack>
                  <a href={project.url} target="_blank">
                    <Button size='lg' colorScheme='blue' variant='outline'>Demo</Button>
                  </a>
                </HStack>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedProjects;