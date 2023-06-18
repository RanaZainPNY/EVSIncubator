========================
Composition:
========================

In composition, the composed objects are created and destroyed along with the container object. They have a lifecycle tied to the container.

Composition represents a strong relationship where one class is composed of other classes or entities. It implies a "whole-part" relationship, where the existence of the composed object depends on the existence of the container object.

The container class takes responsibility for creating and managing the lifecycle of the composed objects.

A change in the container object often affects the composed objects. For example, if the container is destroyed, the composed objects are also destroyed.

Composition is often represented by a class having member variables that are instances of other classes.

========================
Aggregation:
========================
Aggregation represents a weaker relationship between two classes or entities. It implies a "has-a" relationship, where one class has a reference to another class or entity, but the existence of the aggregated object is not dependent on the container object.
 
========================
Association:
========================

