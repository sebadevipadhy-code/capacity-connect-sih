def recommend_trainers(subject, trainers):
    recommendations = []

    for trainer in trainers:
        score = 0
        reasons = []

        # Check subject expertise
        if subject.lower() in [s.lower() for s in trainer.subjects]:
            score += 60
            reasons.append("Subject expertise")

        # Check skill
        if subject.lower() in [s.lower() for s in trainer.skills]:
            score += 30
            reasons.append("Relevant skill")

        # Check experience
        if trainer.experience_years >= 5:
            score += 10
            reasons.append("Good experience")
        elif trainer.experience_years >= 3:
            score += 5
            reasons.append("Moderate experience")

        recommendations.append({
            "name": trainer.name,
            "match_score": score,
            "reason": ", ".join(reasons)
        })

    # Highest matching trainer first
    recommendations.sort(
        key=lambda x: x["match_score"],
        reverse=True
    )

    return recommendations