// in src/comments.js
import * as React from 'react';
import { FC } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import {
    EditButton,
    Identifier,
    UrlField,
    TextField,
    ShowButton
} from 'react-admin';

import { JoinClass } from '../../models';

const useStyles = makeStyles(theme => ({
    root: { margin: '1em' },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '0.5rem 0',
    },
    cardTitleContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardContent: {
        ...theme.typography.body1,
        display: 'flex',
        flexDirection: 'column',
    },
}));

interface Props {
    ids?: Identifier[];
    data?: { [key: string]: JoinClass };
    basePath?: string;
}

export const MobileGridAsAdmin: FC<Props> = ({ ids, data, basePath }) => {
    const classes = useStyles();

    if (!ids || !data) {
        return null;
    }

    return (
        <div className={classes.root}>
            {ids.map(id => (
                <Card key={id} className={classes.card}>
                    <CardHeader
                        title={
                            <div className={classes.cardTitleContent}>
                                <h2>{data[id].class_name}</h2>
                                <EditButton
                                    resource="join_classes"
                                    basePath={basePath}
                                    record={data[id]}
                                />
                            </div>
                        }
                    />
                    <CardContent className={classes.cardContent}>
                        <div>
                            <UrlField record={data[id]} source="zoom_link" label="Zoom Link" />
                        </div>
                        <div>
                            Zoom ID:&nbsp;
                            <TextField
                                record={data[id]}
                                source="zoomid"
                                label="Zoom ID"
                            />
                        </div>
                        <div>
                            Zoom Password:&nbsp;
                            <TextField
                                record={data[id]}
                                source="zoom_pass"
                                label="Zoom Password"
                            />
                        </div>
                        <div>
                            Google Classroom Code:&nbsp;
                            <TextField
                                record={data[id]}
                                source="gclass_code"
                                label="Classroom Code"
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

MobileGridAsAdmin.defaultProps = {
    data: {},
    ids: [],
};

export const MobileGridAsUser: FC<Props> = ({ ids, data, basePath }) => {
    const classes = useStyles();

    if (!ids || !data) {
        return null;
    }

    return (
        <div className={classes.root}>
            {ids.map(id => (
                <Card key={id} className={classes.card}>
                    <CardHeader
                        title={
                            <div className={classes.cardTitleContent}>
                                <h2>{data[id].class_name}</h2>
                                <ShowButton
                                    resource="join_classes"
                                    basePath={basePath}
                                    record={data[id]}
                                />
                            </div>
                        }
                    />
                    <CardContent className={classes.cardContent}>
                        <div>
                            <UrlField record={data[id]} source="zoom_link" label="Zoom Link" />
                        </div>
                        <div>
                            Zoom ID:&nbsp;
                            <TextField
                                record={data[id]}
                                source="zoomid"
                                label="Zoom ID"
                            />
                        </div>
                        <div>
                            Zoom Password:&nbsp;
                            <TextField
                                record={data[id]}
                                source="zoom_pass"
                                label="Zoom Password"
                            />
                        </div>
                        <div>
                            Google Classroom Code:&nbsp;
                            <TextField
                                record={data[id]}
                                source="gclass_code"
                                label="Classroom Code"
                            />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

MobileGridAsUser.defaultProps = {
    data: {},
    ids: [],
};

