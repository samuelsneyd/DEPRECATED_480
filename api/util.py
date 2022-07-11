import inflection


def snake_case_dict(d: dict) -> dict:
    """
    Returns a dictionary where all keys use snake_case

    { "keyOne": <value> } -> { "key_one": <value> }
    """
    if type(d) != dict:
        raise ValueError("Parameter must be a dict")

    return {
        inflection.underscore(key) if type(key) == str else key: value
        for (key, value) in d.items()
    }
