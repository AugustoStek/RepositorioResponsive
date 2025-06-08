import React from 'react';
import CustomButton from './CustomButton';

const ProjectCard = ({ id, image, title, onMoreInfoClick }) => {
    return (
        <div className="card m-3 shadow-sm" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={`Proyecto ${title}`} />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <CustomButton onClick={() => onMoreInfoClick(id)}>Más info</CustomButton>
            </div>
        </div>
    );
};

export default ProjectCard;
